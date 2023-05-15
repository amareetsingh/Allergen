
class Util {
    static getAccessToken = () => {
        let access_token = window.localStorage.getItem('access_token')
            ? window.localStorage.getItem('access_token')
            : window.sessionStorage.getItem('access_token');

        // let rememberMeChecked = window.localStorage.getItem('access_token') ? true : false;
        let refresh_token = window.localStorage.getItem('refresh_token')
            ? window.localStorage.getItem('refresh_token')
            : window.sessionStorage.getItem('refresh_token');

        let expiration_time = window.localStorage.getItem('expiration_time')
            ? window.localStorage.getItem('expiration_time')
            : window.sessionStorage.getItem('expiration_time');

        return { access_token, refresh_token, expiration_time };
    };


    static getInvestor = (investor) => {
        const formData = new FormData();
        formData.append("name", investor.name);
        formData.append("mobile", investor['phone-number']);
        formData.append("email", investor['email']);
        formData.append("country", investor.country);
        formData.append("state", investor.state);
        formData.append("image", investor['profile-picture']);
        formData.append("fundingAmount", investor['funding-amount']);
        formData.append("curole", investor.role);
        formData.append("cuemployer", investor['current-employer']);
        formData.append("linkedin", investor.linkedIn);
        formData.append("industry", investor.industry);
        formData.append("bio", investor.bio);
        return formData
    }

    static getMentor = (mentor) => {
        const formData = new FormData();
        formData.append("name", mentor.name);
        formData.append("mobile", mentor['phone-number']);
        formData.append("email", mentor['email']);
        formData.append("country", mentor.country);
        formData.append("state", mentor.state);
        formData.append("image", mentor['profile-picture']);
        formData.append("isCxo", mentor.isCXO);
        formData.append("designation", mentor.designation);
        formData.append("curole", mentor.role);
        formData.append("cuemployer", mentor['current-employer']);
        formData.append("linkedin", mentor.linkedIn);
        formData.append("bio", mentor.bio);
        formData.append("skills", mentor.skills);
        formData.append("industry", mentor.industry);
        return formData
    }

    static getStartup = (startup) => {
        const formData = new FormData();
        formData.append("startupname", startup.name);
        formData.append("stage", startup["startup-stage"]);
        formData.append("brand", startup.brand);
        formData.append("country", startup.country);
        formData.append("website", startup.website);
        formData.append("linkedin", startup.linkedIn);
        formData.append("industry", startup.industry);
        formData.append("fundstatus", startup["fund-status"]);
        formData.append("founder", startup.founder);
        formData.append("flinkdin", startup["founder-linkedIn"]);
        formData.append("cofounder1", startup["co-founder1"]);
        formData.append("coflinkdin1", startup["co-founder1-linkedIn"]);
        formData.append("cofounder2", startup["co-founder2"]);
        formData.append("coflinkdin2", startup["co-founder2-linkedIn"]);
        formData.append("cofounder3", startup["co-founder3"]);
        formData.append("coflinkdin3", startup["co-founder3-linkedIn"]);
        formData.append("pocName", startup["poc-name"]);
        formData.append("pocEmail", startup["poc-email"]);
        formData.append("pocPhone", startup["poc-phone-number"]);
        formData.append("upload", startup["demo-video"]);
        formData.append("problemStatement", startup["problem-statement"]);
        formData.append("solutionOffered", startup["solution"]);
        formData.append("assist", startup["assistance-in"]);
        formData.append("remarks", startup["remark"]);
        formData.append("competitiveAdvantage", startup["competitive-advantage"]);
        formData.append("competitors", startup.competitors);
        formData.append("customerAcquisitionStrategy", startup["customer-acquisition-strategy"]);
        formData.append("funding", startup.funding);
        formData.append("isFunded", startup.isFunded);
        formData.append("isRevenue", startup.isRevenue);
        formData.append("pitchDeck", startup["pitch-deck"]);
        formData.append("revenue", startup.revenue);
        formData.append("tractionMetrics", startup["traction-metrics"]);
        formData.append("state", startup.state);
        return formData
    }

    static getPartner = (partner) => {
        const formData = new FormData();
        formData.append("name", partner.name);
        formData.append("country", partner.country);
        formData.append("state", partner.state);
        formData.append("partnerType", partner['partner-type']);
        formData.append("brandName", partner['brand-name']);
        formData.append("companyName", partner['company-name']);
        formData.append("website", partner.website);
        formData.append("logo", partner.logo);
        formData.append("aboutCompany", partner.aboutCompany);
        formData.append("industry", partner.industry);
        formData.append("product", partner.product);
        return formData
    }


}

export default Util;