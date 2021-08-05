<template>
    <div class="all-hotels-container">
        <Hotel class="animated--fade-in" style="height: 100vh" v-for="hotel in hotels" :hotel="hotel" :key="hotel._id"></Hotel>
    </div>
</template>

<script>
import Hotel from "../components/Hotel";
import gsapIntegration from "../assets/js/gsapIntegration";
export default {
    name: "AllHotels",
    components: {Hotel},
    data: ()=> ({
        hotels: []
    }),
    methods: {
        async axiosCall(){
            await this.$root.router.getAllHotels()
            .then(response => {
                this.hotels = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.axiosCall()
    },
    updated() {
        this.$nextTick(function () {
            gsapIntegration()
        })
    }
}
</script>