import { ref } from 'vue'
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '../firebase'

const transactions = ref([])

export function useTransactions() {
  const refCol = collection(db, 'transactions')
  const q = query(refCol, orderBy('timestamp', 'desc'))

  onSnapshot(q, snap => {
    transactions.value = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })

  async function addTransaction(tx) {
    await addDoc(refCol, { ...tx, timestamp: new Date() })
  }

  async function deleteTransaction(id) {
    await deleteDoc(doc(db, 'transactions', id))
  }

  return { transactions, addTransaction, deleteTransaction }
}
