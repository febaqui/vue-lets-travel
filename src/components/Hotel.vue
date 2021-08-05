<template>
    <div class="hotel">
        <div>{{hotel.hotel_name}}</div>
        <div>{{hotel.cost_per_night}}</div>
        <div>{{hotel.country}}</div>
    </div>
</template>

<script>
export default {
    name: "Hotel",
    props:{
        hotel: Object
    }
}
</script>