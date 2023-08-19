import { useAuthAxios } from '@/shared/api'

const getUserInformation = async (userId) => await useAuthAxios.post('', { userId })

export default { getUserInformation }
