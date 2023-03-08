// @ts-check
import { test, expect } from '@playwright/test'

test.describe('登录页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/login')
    await expect(page).toHaveURL(/.*login/)
  })
  test('当前是否为登录页', async ({ page }) => {
    await expect(page.getByTestId('title')).toContainText('系统登录')
  })
  test('点击登录跳转首页', async ({ page }) => {
    await page.getByTestId('username').fill('root')
    await page.getByTestId('password').fill('root')
    await page.getByTestId('login').click()
    await expect(page).toHaveURL('http://localhost:5173/home')
  })
})