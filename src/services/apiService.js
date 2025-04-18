import { supabase } from './supabaseClient'

const apiService = {
  bookWorkshop: async (data) => {
    const { data: result, error } = await supabase.functions.invoke('book-workshop', {
      body: data,
    })
    if (error) throw error
    return result
  },
}

export default apiService;
