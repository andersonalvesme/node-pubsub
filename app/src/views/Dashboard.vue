<script setup>
import { onMounted, ref } from 'vue';
import DashboardService from '@/service/DashboardService';

const dashboardService = new DashboardService();
const notifications = ref(null);
const form = ref({});
const categories = ref([
    { label: 'Sports', value: 1 },
    { label: 'Finance', value: 2 },
    { label: 'Movies', value: 3 }
]);
const loadData = () => {
    dashboardService.getAll().then((data) => notifications.value = data);
};

const notify = () => {
    dashboardService.notify(form.value)
        .then(() => {
            form.value = {};
            setTimeout(() => loadData(), 1000);
        });
};

onMounted(() => {
    loadData();
});
</script>

<template>
    <div class="grid m-5">
        <div class="col-12 md:col-4">
            <div class="card p-fluid">
                <h5>Form notification</h5>
                <div class="field">
                    <label for="name1">Category</label>
                    <Dropdown id="category" v-model="form.category" :options="categories" optionLabel="label"
                              optionValue="value"/>
                </div>
                <div class="field">
                    <label for="email1">Message</label>
                    <Textarea v-model="form.message"></Textarea>
                </div>
                <div class="field">
                    <Button :disabled="!(form.category && form.message)" @click="notify">Send</Button>
                </div>
            </div>
        </div>
        <div class="col-12 xl:col-8">
            <div class="card">
                <div class="flex align-items-center mb-4">
                    <h5 class="mb-0 mr-2">
                        Notifications
                    </h5>
                    <Button class="p-button-text p-button-sm" icon="pi pi-refresh" type="button" @click="loadData"/>
                </div>

                <DataTable :value="notifications" responsiveLayout="scroll">
                    <Column field="created_at" header="Datetime">
                        <template #body="slotProps">
                            {{
                                `${new Date(slotProps.data.created_at).toLocaleDateString()} - ${new Date(slotProps.data.created_at).toLocaleTimeString()}`
                            }}
                        </template>
                    </Column>
                    <Column field="log.application" header="Application"></Column>
                    <Column field="log.channel" header="Category">
                        <template #body="slotProps">
                            {{
                                categories.find(category => category.value === slotProps.data.log.notification.category).label
                            }}
                        </template>
                    </Column>
                    <Column field="log.channel" header="Channel"></Column>
                    <Column field="log.user.name" header="User"></Column>
                    <Column field="log.notification.message" header="Message"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
