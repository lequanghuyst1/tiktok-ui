import * as httpRequest from '~/utils/httpRequest';

export const getSuggest = async (page, per_page) => {
    try {
        const res = await httpRequest.get('/users/suggested', {
            params: { page, per_page },
        });
        
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAllSuggest = async () => {
    try {
        const res = await httpRequest.get('/users/suggested');
        
        return res.meta;
    } catch (error) {
        console.log(error);
    }
};