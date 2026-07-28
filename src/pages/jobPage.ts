import { expect, Locator, Page } from "@playwright/test";

export class JobPage {
    private jobsTab: Locator;
    private jobsBasedOnPreferenceLabel: Locator;
    private easyApplyLink: Locator;
    private easyApplyButton: Locator;
    private nextButton: Locator;
    private reviewButton: Locator;

    constructor(private page: Page) {
        this.jobsTab = page.locator('a[href*="/jobs"], a:has-text("Jobs"), button:has-text("Jobs"), [role="tab"]:has-text("Jobs")').first();
        this.jobsBasedOnPreferenceLabel = page.getByRole('heading', {
  name: /Jobs based on your preferences/i
});
        this.easyApplyLink = page.locator('a:has-text("Easy Apply"), button:has-text("Easy Apply"), div:has-text("Easy Apply"), [role="button"]:has-text("Easy Apply")');
        this.easyApplyButton = page.locator('button:has-text("Easy Apply"), a:has-text("Easy Apply"), [role="button"]:has-text("Easy Apply"), input[type="button"][value="Easy Apply"]');
        this.nextButton = page.locator('button:has-text("Next"), input[type="button"][value="Next"], button:has-text("Continue"), button:has-text("Continue to review")');
        this.reviewButton = page.locator('button:has-text("Review"), button:has-text("Review application"), input[type="button"][value="Review"]');
    }

    async clickOnJobsTab() {
        await this.page.waitForTimeout(1500);
        await expect(this.jobsTab).toBeVisible({ timeout: 10000 });
        await this.jobsTab.click();
        await this.page.waitForURL(/.*\/jobs\/?/, { timeout: 15000 }).catch(() => null);
        await this.page.waitForTimeout(1000);
        console.log("user clicked on jobs tab successfully");
    }

    async verifyJobsBasedOnYourPreferencesLabel() {
        await this.page.waitForTimeout(1500);
        const label = this.page.locator('role=heading[name=/Jobs based on your preferences/i], text=/Jobs based on your preferences/i');
        await expect(label.first()).toBeVisible({ timeout: 15000 });
        console.log('verified Jobs based on your preferences label is visible');
    }

    async clickEasyApplyLink() {
        await this.page.waitForTimeout(1500);
        const link = this.easyApplyLink.first();
        await expect(link).toBeVisible({ timeout: 10000 });
        await link.click();
        console.log('user clicked on easy apply link');
    }

    async clickEasyApplyButton() {
        await this.page.waitForTimeout(1500);
        const button = this.easyApplyButton.first();
        await expect(button).toBeVisible({ timeout: 10000 });
        await button.click();
        console.log('user clicked on easy apply button');
    }

    async clickNextButton() {
        await this.page.waitForTimeout(1500);
        const next = this.nextButton.first();
        await expect(next).toBeVisible({ timeout: 10000 });
        await next.click();
        console.log('user clicked on next button');
    }

    async clickReviewButton() {
        await this.page.waitForTimeout(1500);
        const review = this.reviewButton.first();
        await expect(review).toBeVisible({ timeout: 10000 });
        await review.click();
        console.log('user clicked on review button');
    }
}
