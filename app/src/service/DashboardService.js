const contextPath = 'http://localhost:3000';

export default class DashboardService {

    getAll() {
        return fetch(contextPath + '/api/notifications/logs')
            .then((res) => res.json());
    }

    notify(form) {
        return fetch(contextPath + '/api/notifications', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
            .then(() => null);
    }

}
