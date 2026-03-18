import { test, expect } from '@playwright/test';

test.describe('Login Failed Tests', () => {
  test('should show error message for invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://newborns-sonar.kms-technology.com/login');

    // Wait for the form to load
    await page.waitForSelector('#basic');

    // Fill in the email field
    await page.fill('#basic_email', 'test@gmail.com');

    // Fill in the password field  
    await page.fill('#basic_password', 'test');

    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for and verify the error message appears
    await expect(page.getByText('Invalid account!')).toBeVisible();

    // Verify we're still on the login page (not redirected to dashboard)
    await expect(page).toHaveURL(/.*login.*/);

    // Verify the form is still visible
    await expect(page.locator('#basic')).toBeVisible();
  });

  test('should maintain form values after failed login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://newborns-sonar.kms-technology.com/login');

    // Wait for the form to load
    await page.waitForSelector('#basic');

    // Fill in the credentials
    await page.fill('#basic_email', 'test@gmail.com');
    await page.fill('#basic_password', 'test');

    // Submit the form
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for the error message
    await expect(page.getByText('Invalid account!')).toBeVisible();

    // Verify the email field still contains the entered value
    await expect(page.locator('#basic_email')).toHaveValue('test@gmail.com');
    
    // Verify the password field still contains the entered value
    await expect(page.locator('#basic_password')).toHaveValue('test');
  });

  test('should have proper form elements visible', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://newborns-sonar.kms-technology.com/login');

    // Wait for the form to be loaded
    await page.waitForSelector('#basic');

    // Verify all form elements are visible
    await expect(page.locator('#basic_email')).toBeVisible();
    await expect(page.locator('#basic_password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    
    // Verify labels are present using more specific selectors
    await expect(page.locator('label[for="basic_email"]')).toBeVisible();
    await expect(page.locator('label[for="basic_password"]')).toBeVisible();
    
    // Verify forgot password link is present
    await expect(page.getByRole('link', { name: 'Forgot Password' })).toBeVisible();
    
    // Verify sign up link is present
    await expect(page.getByRole('link', { name: 'New to Newborn Learning System? Sign up now' })).toBeVisible();
  });
});