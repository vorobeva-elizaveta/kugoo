import { useAuthAxios } from '@/app/libs/axios'

const getAllProducts = async (page, limit) => {
  const response = await useAuthAxios.get(`/product/all?limit=${+limit}&page=${+page}`)
  console.log(response)
  return response
}

export { getAllProducts }
