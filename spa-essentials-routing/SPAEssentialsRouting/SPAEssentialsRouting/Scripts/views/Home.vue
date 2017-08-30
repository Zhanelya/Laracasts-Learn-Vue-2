<template>
    <div class="container">
        <div class="row">
            <div class="columns">
                <div class="column">
                    <div class="message" v-for="post in posts">
                        <div class="message-header">
                            <p>
                                {{post.user.name}} said...
                            </p>
                            <p>
                                {{post.date}}
                            </p>
                        </div>

                        <div class="message-body" v-text="post.body"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            axios.get('Home/Statuses')
                .then(({data}) => this.posts = data);
        }
    }
</script>