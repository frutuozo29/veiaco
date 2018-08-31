<template>
<div>
  <div>
    <b-card-group deck class="mb-3">
      <b-card class="text-center" footer-bg-variant="transparent">
        <b-row class="justify-content-center" align-v="center">
          <b-col>
            <i class="fas fa-dollar-sign iconCardCredit"></i>
          </b-col>
          <b-col>
            <div>
              <h6>Credits</h6>
              <h5>{{ dataDashboard.totalCredits | formatMoney }}</h5>
            </div>
          </b-col>
        </b-row>
        <div slot="footer">
          <i class="fas fa-sync iconCardFooter"></i>
          <small class="text-muted"> Updated now</small>
        </div>
      </b-card>
      <b-card class="text-center" footer-bg-variant="transparent">
        <b-row class="justify-content-center" align-v="center">
          <b-col>
            <i class="fas fa-dollar-sign iconCardDebt"></i>
          </b-col>
          <b-col>
            <div>
              <h6>Debts</h6>
              <h5>{{ dataDashboard.totalDebts | formatMoney }}</h5>
            </div>
          </b-col>
        </b-row>
        <div slot="footer">
          <i class="fas fa-sync iconCardFooter"></i>
          <small class="text-muted"> Updated now</small>
        </div>
      </b-card>
      <b-card class="text-center" footer-bg-variant="transparent">
        <b-row class="justify-content-center" align-v="center">
          <b-col>
            <i class="fas fa-wallet iconCardBalance"></i>
          </b-col>
          <b-col>
            <div>
              <h6>Balance</h6>
              <h5>{{ dataDashboard.totalCredits - dataDashboard.totalDebts | formatMoney }}</h5>
            </div>
          </b-col>
        </b-row>
        <div slot="footer">
          <i class="fas fa-calendar iconCardFooter"></i>
          <small class="text-muted"> Current month</small>
        </div>
      </b-card>
    </b-card-group>
  </div>
</div>
</template>

<script>
import { sendErrorMessage } from "../../utils/notify";
export default {
  name: "dashboard",
  data() {
    return {
      dataDashboard: {
        totalDebts: 0,
        totalCredits: 0
      }
    };
  },
  mounted() {
    this.getDataDashboard();
  },
  methods: {
    async getDataDashboard() {
      try {
        const filters = {
          month: new Date().getMonth(),
          year: new Date().getFullYear()
        };
        const jsonData = JSON.stringify(filters);
        const response = await this.$http.post("/dashboard", jsonData);
        this.dataDashboard = response.data;
      } catch (error) {
        sendErrorMessage("Can't fecth data dashboard :(");
      }
    }
  }
};
</script>

<style scoped>
.iconCardBalance {
  color: blue;
  font-size: 40px;
}

.iconCardCredit {
  color: green;
  font-size: 40px;
}

.iconCardDebt {
  color: red;
  font-size: 40px;
}

.iconCardFooter {
  color: #a9a9a9;
}
</style>
