import { useAuthAxios } from '@/app/libs/axios'

const getAllProducts = async () => {
  const response = await useAuthAxios.get('/product/all')
  console.log(response)
  return response
}

export { getAllProducts }
