<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <UserAuth v-if="!user" />
    <div v-else>
      <h1 class="text-3xl font-bold mb-4">
        💸 Welcome to Budget Planner
      </h1>
      <TransactionForm @add-transaction="addTransaction" />
      <TransactionList :transactions="transactions" />
      <TransactionSummary v-if="transactions && transactions.length" :transactions="transactions" />
      <div class="grid md:grid-cols-2 gap-6">
        <PieChart :transactions="transactions" />
        <BarChart :transactions="transactions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

import UserAuth from './components/UserAuth.vue'
import TransactionForm from './components/TransactionForm.vue'
import TransactionList from './components/TransactionList.vue'
import TransactionSummary from './components/TransactionSummary.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import { useTransactions } from './composables/useTransactions'

const user = ref(null)

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
  })
})

const { transactions, addTransaction } = useTransactions()
</script>
