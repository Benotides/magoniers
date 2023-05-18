import { defineStore } from 'pinia'
import supabase from '@/supabase/index.js'

export default defineStore('userStore', {
  state: () => ({
    user: undefined
  }),
  actions: {

    //método de iniciar sesión que lo tomo de la doc de SupaBase
    async signIn({ email, password }) {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password
      })
    
      if (data) this.user = data
    },
  }
})
