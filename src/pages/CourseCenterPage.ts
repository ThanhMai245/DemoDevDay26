import { Page } from '@playwright/test';

export class CourseCenterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.click('#course-center-management');
    await this.page.waitForURL(/.*\/course-center-management/);
  }

  async searchCourseCenter(searchText: string) {
    await this.page.getByRole('textbox', { name: 'Search Course Center' }).fill(searchText);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async clearSearch() {
    await this.page.getByRole('textbox', { name: 'Search Course Center' }).fill('');
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async getSearchResults() {
    const noResultsMessage = await this.page.getByText('Sorry. No results have been found');
    if (await noResultsMessage.isVisible()) {
      return [];
    }
    return this.page.locator('tr').filter({ hasText: /.*/ }).allInnerTexts();
  }
}
