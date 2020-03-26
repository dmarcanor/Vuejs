<template>
    <tr>
        <td>{{item.foodName}}</td>
        <td>{{item.quantity}}</td>
        <td>{{item.price * item.quantity}}</td>
    </tr>
</template>

<script>
export default{
    props: ['item']
}
</script>