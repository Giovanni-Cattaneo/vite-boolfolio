<script>
export default {
    name: 'AppContacts',
    data() {
        return {
        };
    }
};
</script>

<template>
    <div class="container">
        <h1>Welcome to Contacts page, keep in touch</h1>

        <form action="" method="POST">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <label for="message">Messaggio:</label>
            <textarea id="message" name="message"></textarea><br><br>
            <button type="submit">Invia</button>
        </form>
    </div>
</template>

<style scoped></style>