

var login = { method: 'POST',
  url: 'https://qa-admin.nativo.com/login',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: { email: 'mishtest@nativo.com', password: 'Nativo123$' },
  jar: 'JAR' };


var minCampaignPOST = { method: 'POST',
  url: 'https://qa-admin.nativo.com/api/campaigns/v3/0',
  headers:
   { accept: 'application/json, text/plain, */*',
     'content-type': 'application/json;charset=UTF-8',
     'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
     'accept-language': 'en-US,en;q=0.9',
     'x-csrf-skip': 'c477d58e802c3d47ecb0e48359388fa59ff96174'},
  body:
   { advertiser_id: 376,
     advertiser_logo_url: null,
     campaign_manager_id: null,
     comp_sep_enabled: false,
     companion_assets_settings: { right: [] },
     frequency_cap: { duration: null, value: null },
     hashtag: null,
     id: null,
     moat_article_enabled: false,
     moat_engagement_enabled: false,
     moat_placement_enabled: false,
     multi_placement_ad_filtering: false,
     name: 'REST API Test - Minimum Required Fields Brian Test',
     notes: null,
     related_content_settings:
      { ads: [],
        enabled: false,
        list_filter: 'campaign',
        list_mode: 'active_ads_only',
        sort_order: 'date_started',
        title: 'TO SEE MORE CONTENT' },
     sales_persons: [],
     salesforce_id: 'NTV762557',
     template_style: null,
     template_styles_enabled: false,
     third_party_account: null,
     third_party_account_type: 0,
     tracking_breakdown: 'none',
     tracking_tags: [] },
  json: true,
  jar: 'JAR' };


var minBudgetPOST = {
 method: ‘POST’,
 url: ’https://qa-admin.nativo.com/api/budgets/v3/0',
 headers: {
   x-csrf-skip: ‘c477d58e802c3d47ecb0e48359388fa59ff96174’,
   accept-language: ‘en-US,en;q=0.9’,
   user-agent: ‘Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36’,
   content-type: ‘application/json;charset=UTF-8’,
   accept: ‘application/json, text/plain, *//*’,
   referer: ‘https://dev-admin.nativo.com/budget/new’
 },
 body: {
   ad_server_type: ‘nativo’,
   billable_event_total_target: 0,
   billable_events_delivered: 0,
   budget_delivered: 0,
   campaign_id: 141439,
   compatibility_mode: false,
   conversion_pixels: [],
   daily_cap_io: 0,
   date_completed: null,
   date_started: null,
   delivery_adjustment: 0,
   delivery_goal: 100,
   delivery_speed: ‘evenly’,
   enable_brand_safety_hp_sf: false,
   fees: [],
   flight_date_end: ‘2019-06-30 00:00:00-07:00’,
   flight_date_start: ‘2019-05-10 00:00:00-07:00’,
   force_ad_choices: false,
   frequency_cap: {duration: null, value: null},
   id: 186089,
   impression_total_target: 244,
   impression_total_target_io: 244,
   io_budget: null,
   io_rate: null,
   linked_feed_url: null,
   marketplace_id: 1,
   monthly_cap_io: 0,
   name: ‘Alex Test Budget - Minimum Required Fields’,
   optimization_criteria: ‘click_rate’,
   override_tracking: false,
   placements: {},
   priority_level: ‘standard’,
   rate_io: 30,
   rate_option_id: 859,
   rate_type: ‘viewable_cpm’,
   target_by: ‘budget’,
   target_by_goal: 100,
   targeting: {},
   third_party_data_vendor_id: null,
   tracking_breakdown: ‘none’,
   tracking_tags: [],
   use_interest_targeting: false,
   vast_url: null,
   video_feed_source: null,
   viewable_rate: 0.35
 },
 json: true,
 jar: ‘JAR’
};

  module.exports = {
    login: login,
    minCampaignPayload: minCampaignPayload
}