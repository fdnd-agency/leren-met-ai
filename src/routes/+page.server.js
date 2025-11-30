export const load = async () => {
    const endpoint = 'https://fdnd-agency.directus.app/items/leren_met_ai_methodes?fields=*,lecturer.*,tips.leren_met_ai_tips_id.*'

    const response = await fetch(endpoint);
    const data = await response.json();
    
    return {
      methods: data.data
    }
}