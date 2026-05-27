import { test, expect } from '@playwright/test';
const BASE_URL = 'https://api.trademe.co.nz/v1';
test.describe('Trade Me API - Categories Endpoint', () => {


  test('@api @smoke API-01: Retrieve all categories successfully', async ({ request }) => {
    // Make GET request to retrieve all categories
    const response = await request.get(`${BASE_URL}/Categories.json`);

    // Assert response status is 200 OK
    expect(response.status()).toBe(200);

    // Parse response body
    const responseBody = await response.json();

    // Assert response has required fields
    expect(responseBody).toHaveProperty('Name');
    expect(responseBody).toHaveProperty('Number');
    expect(responseBody).toHaveProperty('Subcategories');

    // Assert Subcategories is an array and has items
    expect(Array.isArray(responseBody.Subcategories)).toBeTruthy();
    expect(responseBody.Subcategories.length).toBeGreaterThan(0);

    // Assert each subcategory has required fields
    const firstSubcategory = responseBody.Subcategories[0];
    expect(firstSubcategory).toHaveProperty('Name');
    expect(firstSubcategory).toHaveProperty('Number');
    expect(firstSubcategory).toHaveProperty('Path');
    expect(firstSubcategory).toHaveProperty('HasClassifieds');

    // Log for verification
    console.log('Total top-level categories:', responseBody.Subcategories.length);
    console.log('First category:', firstSubcategory.Name);
  });

  test('@api @regression API-02: Retrieve Trade Me Motors category with depth and counts', async ({ request }) => {
    // Make GET request to retrieve Motors category (0001-) with depth=1 and counts
    const response = await request.get(`${BASE_URL}/Categories/0001-.json`, {
      params: {
        depth: 1,
        with_counts: true
      }
    });

    // Assert response status is 200 OK
    expect(response.status()).toBe(200);

    // Parse response body
    const responseBody = await response.json();

    // Assert category is Trade Me Motors
    expect(responseBody.Number).toBe('0001-');
    expect(responseBody.Name).toContain('Motor');

    // Assert has subcategories
    expect(Array.isArray(responseBody.Subcategories)).toBeTruthy();
    expect(responseBody.Subcategories.length).toBeGreaterThan(0);

    // Assert count is included and is a number
    expect(responseBody).toHaveProperty('Count');
    expect(typeof responseBody.Count).toBe('number');
    expect(responseBody.Count).toBeGreaterThanOrEqual(0);

    // Assert each subcategory also has counts
    const firstSubcategory = responseBody.Subcategories[0];
    expect(firstSubcategory).toHaveProperty('Count');
    expect(typeof firstSubcategory.Count).toBe('number');

    // Assert AreaOfBusiness is Motors (value 3)
    expect(responseBody.AreaOfBusiness).toBe(3);

    // Log for verification
    console.log('Category Name:', responseBody.Name);
    console.log('Total listings count:', responseBody.Count);
    console.log('Number of subcategories:', responseBody.Subcategories.length);
    console.log('First subcategory:', firstSubcategory.Name, '- Count:', firstSubcategory.Count);
  });

  test.describe('Retrieve General Categories API', () => {

    test('TC-API-01: Retrieve general categories returns 200', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body).toBeTruthy();
    });

    test('TC-API-02: Response content type is JSON', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      expect(
        response.headers()['content-type']
      ).toContain('application/json');
    });

    test('TC-API-03: Root category contains expected fields', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      const body = await response.json();

      expect(body).toHaveProperty('Name');
      expect(body).toHaveProperty('Number');
      expect(body).toHaveProperty('Subcategories');

      expect(typeof body.Name).toBe('string');
      expect(typeof body.Number).toBe('string');
      expect(Array.isArray(body.Subcategories)).toBeTruthy();
    });

    test('TC-API-04: Root category name is correct', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      const body = await response.json();

      expect(body.Name).toContain('Root');
    });

    test('TC-API-05: Subcategories array is not empty', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      const body = await response.json();

      expect(body.Subcategories.length).toBeGreaterThan(0);
    });

    test('TC-API-06: Each subcategory contains required fields', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      const body = await response.json();

      for (const category of body.Subcategories) {

        expect(category).toHaveProperty('Name');
        expect(category).toHaveProperty('Number');
        expect(category).toHaveProperty('Path');

        expect(typeof category.Name).toBe('string');
        expect(typeof category.Number).toBe('string');
        expect(typeof category.Path).toBe('string');
      }
    });

    test('TC-API-07: Invalid category returns expected error', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/999999999.json`
      );

      expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    test('TC-API-08: Invalid endpoint returns 404', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/CategoryINVALID/0.json`
      );

      expect(response.status()).toBe(404);
    });

    test('TC-API-09: API response time is under 2 seconds', async ({ request }) => {

      const startTime = Date.now();

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      const endTime = Date.now();

      const responseTime = endTime - startTime;

      expect(response.status()).toBe(200);

      expect(responseTime).toBeLessThan(2000);
    });

    test('TC-API-10: Response does not expose sensitive fields', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      expect(response.status()).toBe(200);

      const body = await response.json();

      // Verify sensitive fields are not present
      expect(body).not.toHaveProperty('password');
      expect(body).not.toHaveProperty('token');
      expect(body).not.toHaveProperty('apiKey');
      expect(body).not.toHaveProperty('authorization');
      expect(body).not.toHaveProperty('clientSecret');

    });

    test('TC-API-11: Category numbers follow expected format', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/0.json`
      );

      const body = await response.json();

      for (const category of body.Subcategories) {

        expect(category.Number).toMatch(/^[0-9-]+$/);
      }
    });

    test('TC-API-12: API handles special characters safely', async ({ request }) => {

      const response = await request.get(
        `${BASE_URL}/Categories/<script>.json`
      );

      expect(response.status()).toBeGreaterThanOrEqual(400);
    });


  });
});