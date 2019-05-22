

let login = { method: 'POST',
  url: 'https://qa-admin.nativo.com/login',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: { email: 'mishtest@nativo.com', password: 'Nativo123$' },
  jar: 'JAR' };


let minCampaignPayload = { method: 'POST',
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

  module.exports = {
    login: login,
    minCampaignPayload: minCampaignPayload
}