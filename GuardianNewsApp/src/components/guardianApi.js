import axios from "axios";
import {rateLimitErrorAppend} from "./rateLimitErrorAppend";

export const callGuardianApi = async (params) => {
    try {
        let searchParams = {
            "api-key": process.env.API_KEY,
            "show-fields": "thumbnail,byline",
            q: params.q || null,
            section: params.section || null,
            "from-date": params.fromDate || null,
            "to-date": params.toDate || null,
            "order-by": params.sortSelect || "newest",
            "page-size": 12,
            page: params.page || 1,
        };

        const filteredParams = Object.fromEntries(
            Object.entries(searchParams).filter(([key, value]) => value !== null)
        )
        const response = await axios.get(process.env.API_URL+"search", {
            params: filteredParams
        })
        if (response.data.response.results.length === 0) {
            alert("No results found. Please try another search!");
            return [];
        }
        return  response.data.response.results
    } catch (error) {
        if (error.response && error.response.status === 429) {
            rateLimitErrorAppend();
        }
        console.warn(error);
        alert("No results found. Please try again!");
        return []
    }
}

export const callSingleArticle = async (id) => {
    try {
        const response = await axios.get(`${process.env.API_URL}/${id}`, {
            params: {
                "api-key": process.env.API_KEY,
                "show-fields": "thumbnail,byline,headline,body"
            }
        });
        return response.data.response.content;
    } catch (error) {
        console.error(error);
        alert("Failed to load article. Try again!");
        return null;
    }
};

export const callGuardianApiSections = async () => {
    try {
        const response = await axios.get(process.env.API_URL+"sections", {
            params: {
                "api-key": process.env.API_KEY,
            }
        })
        return response.data.response.results;
    } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again!");
        return []
    }
}