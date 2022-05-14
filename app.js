const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [{
                    id: 'manual',
                    name: 'manual lorenz',
                    phone: '01112345678',
                    email: 'manual@gmail.com'
                },
                {
                    id: 'julie',
                    name: 'julie jones',
                    phone: '01198563247',
                    email: 'julie@gmail.com'
                }
            ]
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.component('friend-contact', {
    template: `
    <li>
    <h2> {{ friend.name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manual',
                name: 'manual lorenz',
                phone: '01112345678',
                email: 'manual@gmail.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app');