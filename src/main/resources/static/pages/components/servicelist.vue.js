Vue.component("service-list",{
    template: `
        <v-card>
            <v-card-title>
            Services
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="services"
            class="elevation-1"
            :search="search"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.createdBy }}</td>
                    <td>{{ props.item.createdAt }}</td>
                    <td> <v-btn color="info" @click="getDetails(props.item.id)">VIEW</v-btn> </td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
                </v-alert> 
            </v-data-table>
        </v-card>
    `,
    data: function () {
        return {
        search: '',
        headers: [
            { text: 'id',value: 'id'},
            { text: 'Name', value: 'name' },
            { text: 'Created By', value: 'createdBy' },
            { text: 'createdAt', value: 'createdAt' }
          ],
        services: []
    }
    },
    mounted() {
        this.getServices()
    },
    methods: {
        getServices: function() {
            //when deploying change this url
            var endpoint="/getServices";

            axios({
                method: 'get',
                url: endpoint,
              }).then(response => {
                this.services = response.data
              }).catch(err => {
                console.err('err', err)
              })
        },
        getDetails: function(id) {
               console.log(id);
               router.push({ path: `/getDetails/${id}` });
        }
    }
});