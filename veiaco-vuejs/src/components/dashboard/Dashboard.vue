<template>
<div>
  <h4 class="dashboard-text">DASHBOARD</h4>
  <br>
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
              <h3>$5,344</h3>
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
              <h3>$2,725</h3>
            </div>
          </b-col>
        </b-row>
        <div slot="footer">
          <i class="fas fa-sync iconCardFooter"></i>
          <small class="text-muted"> Last updated 3 mins ago</small>
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
              <h3>$2,619</h3>
            </div>
          </b-col>
        </b-row>
        <div slot="footer">
          <i class="fas fa-calendar iconCardFooter"></i>
          <small class="text-muted"> Last month</small>
        </div>
      </b-card>
    </b-card-group>
  </div>
</div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style scoped>
.iconCardBalance {
  color: blue;
  font-size: 50px;
}

.iconCardCredit {
  color: green;
  font-size: 50px;
}

.iconCardDebt {
  color: red;
  font-size: 50px;
}

.iconCardFooter {
  color: #a9a9a9;
}

.dashboard-text {
  color: #a9a9a9;
}
</style>
