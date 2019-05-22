let getRoutes = function(baseUrl){
    return {
        baseUrl: baseUrl,
        dashboard: `${baseUrl}/dashboard`,
        campaign: {
            list: `${baseUrl}/campaigns`,
            favorites: `${baseUrl}/campaigns#?favorites=1`,
            new: `${baseUrl}/campaigns/new`,
            edit: {
                campaignTab:`${baseUrl}/campaigns/119556/edit#?currentTab=campaign`,
                trackingTab:`${baseUrl}/campaigns/119556/edit#?currentTab=tracking`,
                assetsTab:`${baseUrl}/campaigns/119556/edit#?currentTab=content`,
                advancedTab: `${baseUrl}/campaigns/119556/edit#?currentTab=advanced`
            },
            preferred: `${baseUrl}/preferred-campaigns`,
            marketplace: `${baseUrl}/marketplace-campaigns`,
            managed: `${baseUrl}/managed-campaigns`,
            detail: `${baseUrl}/campaigns/124288`,
            bulkUpdateAdsHeadlines: `${baseUrl}/campaigns/888/headlines/edit`,
            bulkUpdateAdsTracking: `${baseUrl}/campaigns/888/tracking/edit`
        },
        budget: {
            new: `${baseUrl}/campaigns/119556/budgets/new`,
            edit: `${baseUrl}/budgets/142188/edit#?currentTab=budget`,
            copy: `${baseUrl}/campaigns/888/copy`,
        },
        ad: {
            pendingList:`${baseUrl}/pending-ads`,
            detail: `${baseUrl}/ads/888`,
            new: `${baseUrl}/budgets/888/ads/new`,
            edit: `${baseUrl}/ads/888/edit`
        },
        creative: {
            list: `${baseUrl}/creatives`,
            edit: `${baseUrl}/=creatives/888`,
        },
        package: {
            list: `${baseUrl}/campaign-packages`,
            edit: `${baseUrl}/campaign-packages/888/edit`,
        },
        deal: {
            list: `${baseUrl}/deals`,
            new: `${baseUrl}/deals/888/new`,
            edit: `${baseUrl}/deals/888/edit`,
        },
        advertiser: {
            list: `${baseUrl}/advertisers`,
            new: `${baseUrl}/advertisers/888/new`,
            edit: `${baseUrl}/advertisers/888/edit`
        },
        contentHub: {
            list: `${baseUrl}/content-hubs`,
            new: `${baseUrl}/campaign-packages/888/new`,
            edit: `${baseUrl}/campaign-packages/888/edit`,
        },
        publication: {
            list: `${baseUrl}/publications`,
            detail: `${baseUrl}/publications/6497`,
            sectionList: `${baseUrl}/publications/6497/sections`,
            sectionDetail: `${baseUrl}/publications/6497/sections/349628`,
            placement: `${baseUrl}/publications/6497/placements`,
            ifus: `${baseUrl}/publications/6497/in-feed-units`,
            clps: `${baseUrl}/publications/6497/content-landing-pages`,
            chps: `${baseUrl}/publications/6497/content-hub-pages`,
            templates: `${baseUrl}/publications/6497/templates`,
            dfpMapping: `${baseUrl}/publications/888/dfp-mapping`,
            pubMonetizationList: `${baseUrl}/publications/888/monetization`,
            pubMonetizationEdit: `${baseUrl}/publications/888/monetization/1`,
            globalMonetization: `${baseUrl}/monetization`,
            openDeals: `${baseUrl}/open-deals`,
            monetization: `${baseUrl}/organizations/2/marketplaces#?interval=30`,
        },
        report: {
            list: `${baseUrl}/reports/overview`,
            schedules: `${baseUrl}/reports/schedules`,
            schedule: `${baseUrl}/reports/schedule`,
            direct: `${baseUrl}/reports/direct`,
            demand: `${baseUrl}/reports/demand`,
            inventory: `${baseUrl}/reports/inventory`,
            feedRelay: `${baseUrl}/reports/feed-relay`,
            marketplace: `${baseUrl}/reports/marketplace`,
            preferred: `${baseUrl}/reports/preferred`,
            managed: `${baseUrl}/reports/managed`,
            auction: `${baseUrl}/reports/auction`
        },
        user: {
            list: `${baseUrl}/users`,
            new: `${baseUrl}/users/new`,
            edit: `${baseUrl}/users/888/edit`,
            myAccount: `${baseUrl}/my-account`
        },
        role: {
            list: `${baseUrl}/roles`,
            new: `${baseUrl}/roles/new`,
            edit: `${baseUrl}/roles/888/edit`,

        },
        publisher: {
            list: `${baseUrl}/publishers`,
            new: `${baseUrl}/publishers/new`,
            edit: `${baseUrl}/publishers/888/edit`,
        }
    };
}

module.exports = {getRoutes: getRoutes};
