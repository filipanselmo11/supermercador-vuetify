import { defineStore } from "pinia";
import { ProductInterface } from "../types/types";
import { api } from '../services/api';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as ProductInterface[],
    loading: true,
  }),
  actions: {
    async getProducts(): Promise<void> {
      this.loading = true;
      await api.get('/products').then(res => {
        this.products = res.data
      }).catch(error => {
        console.log('ERROR ', error);
      });
      this.loading = false;
    }
  },
});
