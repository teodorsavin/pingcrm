<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">
      <inertia-link class="text-indigo-400 hover:text-indigo-600" :href="route('contacts')">{{ $t('contacts') }}</inertia-link>
      <span class="text-indigo-400 font-medium">/</span> {{ $t('create') }}
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="store">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('first name')" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('last name')" />
          <select-input v-model="form.organization_id" :error="form.errors.organization_id" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('organization')">
            <option :value="null" />
            <option v-for="organization in organizations" :key="organization.id" :value="organization.id">{{ organization.name }}</option>
          </select-input>
          <text-input v-model="form.email" :error="form.errors.email" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('email')" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('phone')" />
          <text-input v-model="form.address" :error="form.errors.address" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('address')" />
          <text-input v-model="form.city" :error="form.errors.city" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('city')" />
          <text-input v-model="form.region" :error="form.errors.region" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('province')" />
          <select-input v-model="form.country" :error="form.errors.country" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('country')" >
            <option :value="null" />
            <option value="CA">Canada</option>
            <option value="US">United States</option>
          </select-input>
          <text-input v-model="form.postal_code" :error="form.errors.postal_code" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('postal code')" />
        </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ $t('create contact') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import TextInput from '@/Shared/TextInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'

export default {
  metaInfo: { title: 'Create Contact' },
  components: {
    LoadingButton,
    SelectInput,
    TextInput,
  },
  layout: Layout,
  props: {
    organizations: Array,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        first_name: null,
        last_name: null,
        organization_id: null,
        email: null,
        phone: null,
        address: null,
        city: null,
        region: null,
        country: null,
        postal_code: null,
      }),
    }
  },
  methods: {
    store() {
      this.form.post(this.route('contacts.store'))
    },
  },
}
</script>

<i18n>
{
    "en": {
        "contacts": "Contacts",
        "create": "Create",
        "first name": "First Name",
        "last name": "Last Name",
        "organization": "Organization",
        "email": "Email",
        "phone": "Phone",
        "address": "Address",
        "city": "City",
        "province": "Province/State",
        "country": "Country",
        "postal code": "Postal code",
        "create contact": "Create Contact"
    },
    "ro": {
        "contacts": "Contacte",
        "create": "Creare",
        "first name": "Prenume",
        "last name": "Nume de familie",
        "organization": "Organizatie",
        "email": "E-mail",
        "phone": "Telefon",
        "address": "Adresa",
        "city": "Oras",
        "province": "Judet",
        "country": "Tara",
        "postal code": "Cod postal",
        "create contact": "Creaza Contact"
    }
}
</i18n>
