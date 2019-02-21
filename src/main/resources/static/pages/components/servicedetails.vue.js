var ServiceDetails = Vue.component("ServiceDetails", {
    template: `<v-app id="inspire">
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="service.id"
        label="Service Id"
        required
      ></v-text-field>

      <v-text-field
        v-model="service.name"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="service.createdBy"
        label="Developer"
        required
      ></v-text-field>

      <v-text-field
        v-model="service.createdAt"
        label="Date Developed"
        required
      ></v-text-field>
    </v-form>

    <div align-end row fill-height>
    <v-btn color="primary" @click="goBack()
"> Back </v-btn>
    </div>

</v-app>

`,
    data() {
      return {
          service: {}
      };
    },
    mounted() {
        this.getServiceDetails(this.$route.params.id);
    },
    methods: {
        getServiceDetails: function (id){
            console.log("getting service details "+ id);
            var endpoint="/getService/"+ id;

               axios({
                method: 'get',
                url: endpoint,
              }).then(response => {
                this.service = response.data
              }).catch(err => {
                console.err('err', err)
              });
        },
        goBack: function() {
            router.go(-1);
        }
    }
  });