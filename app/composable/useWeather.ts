

export const  useWeather = () => {
    const API_KEY = useRuntimeConfig().public.weatherApiKey

    const getWeather = async (city: string) => {

        try {

            return await $fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        } catch (error) {
            throw error;
        }
    }

    return { getWeather }


}