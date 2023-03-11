import { test, expect } from '@playwright/test'

test.describe('剪切板页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/clipboard')
    await expect(page).toHaveURL(/.*clipboard/)
  })
  test('复制功能测试', async ({ page }) => {
    await page.getByTestId('input').fill('www.google.com')
    await page.getByTestId('button').click()
    await expect(page.getByTestId('copy')).toContainText('www.google.com')

    await page.getByTestId('input').fill('www.baidu.com')
    await page.getByTestId('button').click()
    await expect(page.getByTestId('copy')).toContainText('www.baidu.com')
  })
})