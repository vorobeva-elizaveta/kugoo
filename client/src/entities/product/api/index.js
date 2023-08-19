import { useAuthAxios } from '../../../shared/api'

export const getAllProducts = async (page, limit) =>
  await useAuthAxios.get(`/product/all?limit=${+limit}&page=${+page}`)
