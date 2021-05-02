const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tipoff',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: [
      {
        title: 'Addresses',
        collapsable: true,
        children: [
          '/addresses/installation',
          '/addresses/requirements',
          '/addresses/usage'
        ]
      },
      {
        title: 'Authorization',
        collapsable: true,
        children: [
          '/authorization/installation',
          '/authorization/requirements',
          '/authorization/usage'
        ]
      },
      {
        title: 'Booking Calendar',
        collapsable: true,
        children: [
          '/booking-calendar/installation',
          '/booking-calendar/requirements',
          '/booking-calendar/usage'
        ]
      },
      {
        title: 'Bookings',
        collapsable: true,
        children: [
          '/bookings/installation',
          '/bookings/requirements',
          '/bookings/usage'
        ]
      },
      {
        title: 'Checkout',
        collapsable: true,
        children: [
          '/checkout/installation',
          '/checkout/requirements',
          '/checkout/usage'
        ]
      },
      {
        title: 'Discounts',
        collapsable: true,
        children: [
          '/discounts/installation',
          '/discounts/requirements',
          '/discounts/usage'
        ]
      },
      {
        title: 'Escape Room',
        collapsable: true,
        children: [
          '/escape-room/installation',
          '/escape-room/requirements',
          '/escape-room/usage'
        ]
      },
      {
        title: 'Feedback',
        collapsable: true,
        children: [
          '/feedback/installation',
          '/feedback/requirements',
          '/feedback/usage'
        ]
      },
      {
        title: 'Fees',
        collapsable: true,
        children: [
          '/fees/installation',
          '/fees/requirements',
          '/fees/usage'
        ]
      },
      {
        title: 'Flex Scheduling',
        collapsable: true,
        children: [
          '/flex-scheduling/installation',
          '/flex-scheduling/requirements',
          '/flex-scheduling/usage'
        ]
      },
      {
        title: 'Forms',
        collapsable: true,
        children: [
          '/forms/installation',
          '/forms/requirements',
          '/forms/usage'
        ]
      },
      {
        title: 'Invoices',
        collapsable: true,
        children: [
          '/invoices/installation',
          '/invoices/requirements',
          '/invoices/usage'
        ]
      },
      {
        title: 'Algora API',
        collapsable: true,
        children: [
          '/laravel-algora-api/installation',
          '/laravel-algora-api/requirements',
          '/laravel-algora-api/usage'
        ]
      },
      {
        title: 'Google API',
        collapsable: true,
        children: [
          '/laravel-google-api/installation',
          '/laravel-google-api/requirements',
          '/laravel-google-api/usage'
        ]
      },
      {
        title: 'SERP API',
        collapsable: true,
        children: [
          '/laravel-serpapi/installation',
          '/laravel-serpapi/requirements',
          '/laravel-serpapi/usage'
        ]
      },
      {
        title: 'Shippo API',
        collapsable: true,
        children: [
          '/laravel-shippo-api/installation',
          '/laravel-shippo-api/requirements',
          '/laravel-shippo-api/usage'
        ]
      },
      {
        title: 'Locations',
        collapsable: true,
        children: [
          '/locations/installation',
          '/locations/requirements',
          '/locations/usage'
        ]
      },
      {
        title: 'Notes',
        collapsable: true,
        children: [
          '/notes/installation',
          '/notes/requirements',
          '/notes/usage'
        ]
      },
      {
        title: 'Payments',
        collapsable: true,
        children: [
          '/payments/installation',
          '/payments/requirements',
          '/payments/usage'
        ]
      },
      {
        title: 'Products',
        collapsable: true,
        children: [
          '/products/installation',
          '/products/requirements',
          '/products/usage'
        ]
      },
      {
        title: 'Profiles',
        collapsable: true,
        children: [
          '/profiles/installation',
          '/profiles/requirements',
          '/profiles/usage'
        ]
      },
      {
        title: 'Refunds',
        collapsable: true,
        children: [
          '/refunds/installation',
          '/refunds/requirements',
          '/refunds/usage'
        ]
      },
      {
        title: 'Remote Monitoring',
        collapsable: true,
        children: [
          '/remote-monitoring/installation',
          '/remote-monitoring/requirements',
          '/remote-monitoring/usage'
        ]
      },
      {
        title: 'Reviews',
        collapsable: true,
        children: [
          '/reviews/installation',
          '/reviews/requirements',
          '/reviews/usage'
        ]
      },
      {
        title: 'Scheduler',
        collapsable: true,
        children: [
          '/scheduler/installation',
          '/scheduler/requirements',
          '/scheduler/usage'
        ]
      },
      {
        title: 'SEO',
        collapsable: true,
        children: [
          '/seo/installation',
          '/seo/requirements',
          '/seo/usage'
        ]
      },
      {
        title: 'Staff Bookings',
        collapsable: true,
        children: [
          '/staff-bookings/installation',
          '/staff-bookings/requirements',
          '/staff-bookings/usage'
        ]
      },
      {
        title: 'Staff Management',
        collapsable: true,
        children: [
          '/staff-management/installation',
          '/staff-management/requirements',
          '/staff-management/usage'
        ]
      },
      {
        title: 'Statuses',
        collapsable: true,
        children: [
          '/statuses/installation',
          '/statuses/requirements',
          '/statuses/usage'
        ]
      },
      {
        title: 'Support',
        collapsable: true,
        children: [
          '/support/installation',
          '/support/requirements',
          '/support/usage'
        ]
      },
      {
        title: 'Taxes',
        collapsable: true,
        children: [
          '/taxes/installation',
          '/taxes/requirements',
          '/taxes/usage'
        ]
      },
      {
        title: 'Test Support',
        collapsable: true,
        children: [
          '/test-support/installation',
          '/test-support/requirements',
          '/test-support/usage'
        ]
      },
      {
        title: 'Vouchers',
        collapsable: true,
        children: [
          '/vouchers/installation',
          '/vouchers/requirements',
          '/vouchers/usage'
        ]
      },
      {
        title: 'Waivers',
        collapsable: true,
        children: [
          '/waivers/installation',
          '/waivers/requirements',
          '/waivers/usage'
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
