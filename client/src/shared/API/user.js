import { useAuthAxios } from '@/app/libs/axios'

const getUserInformation = async (userId) => {
  return await useAuthAxios.post({ userId })
}

export default { getUserInformation }
