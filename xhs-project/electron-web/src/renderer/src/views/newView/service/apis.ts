import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'
const token = sessionStorage.getItem('token')
//视频点赞
export const NoteLikeAPI = async (note_id:string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/note/like?note_id=${note_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // Assuming the API response contains the data you need
    return response.data
  } catch (error) {
    console.error('Error in API request:', error)
    throw error
  }
}
//关注用户
export const UserFollowAPI = async (user_id:string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/user/follow?user_id=${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // Assuming the API response contains the data you need
    return response.data
  } catch (error) {
    console.error('Error in API request:', error)
    throw error
  }
}
// 评论点赞
export const CommentLikeAPI = async (comment_id:string,note_id:string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/comment/like?comment_id=${comment_id}&note_id=${note_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // Assuming the API response contains the data you need
    return response.data
  } catch (error) {
    console.error('Error in API request:', error)
    throw error
  }
}

//发送验证码
export const SendCodeAPI = async (phone:string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/xhs/send_code?phone=${phone}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // Assuming the API response contains the data you need
    return response.data
  } catch (error) {
    console.error('Error in API request:', error)
    throw error
  }
}
//登录小红书
export const LoginXhsAPI= async (phone:string,code:string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/xhs/login?phone=${phone}&code=${code}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // Assuming the API response contains the data you need
    return response.data
  } catch (error) {
    console.error('Error in API request:', error)
    throw error
  }
}
