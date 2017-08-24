'use strict';

import './assets/scss/main.scss';
import Vue from 'vue';
import json from './data.js';

Vue.component('contact-list', {
	props: ['child'],
    template: `
		<div class="list-item">
			<input type="checkbox" :id="'item-' + child.ID" v-model="child.toggle">
            <label class="list-item__toggle" :for="'item-' + child.ID" :class="{ 'child' : child.sub.length > 0}"></label>
			<div class="list-item-content">
				<span class="list-item__name">{{ child.Name }}</span>
				<span class="list-item__phone">{{ child.Phone }}</span>
				<span class="list-item__city">{{ child.City }}</span>
			<contact-list v-for="item in child.sub" :key="item.id" :child="item" :class="{ 'open' : child.toggle }"></contact-list>
            </div>
            <button @click="deleteItem(index)">Delete</button>
		</div>
	`
})
let contact = new json({
	el: '#list',
	data: {},
	created() {
		let self = this;
		self.contactList();
	},
	methods: {
		contactList: function() {
			let self = this;
			
			let parent = self.arr.filter(item => {
				if (typeof item.parentID === 'undefined') setRead(item.ID);
				return ((typeof item.parentID === 'undefined') || (item.parentID === 0)); 
			});
			
			function readed(data) {
				let result = data.filter(item => {
					return !item.readed; 
				});
				return result;
			}
			
			function setRead(id) {
				let result = self.arr.map(item => { 
					if (item.ID === id) item.readed = true;
					return item;
				})
				self.arr = result;
				return result;
			}
			 
			function findChild(arr, id) {
				let result = arr.filter(item => {
					if (item.parentID === id) setRead(item.ID);
					return (item.parentID === id);
				});
				return result; 
			}
			
			function list(arr, data) {
				data.filter(item => { 
					let result = findChild(readed(arr), item.ID); 
					//item.sub = result; 
					self.$set(item, 'sub', result);
					self.$set(item, 'toggle', false);

					if (item.sub.length > 0) list(readed(arr), item.sub);
				})
				return data;
            }
            
		let listfilter = list(self.arr, parent);
        self.result = self.result.concat(listfilter);

 
        function deleteItem(element, index, array) {
            // self.result.splice(index, 1);
            console.log(index);
        }

        self.arr.forEach(deleteItem);
 

        // function sort(arr) {
        //     self.arr.sort(function(a, b) {
        //         var nameA = a.item.Name.toUpperCase();
        //         var nameB = b.item.Name.toUpperCase();
        //         if (nameA < nameB) {
        //             return -1;
        //         }
        //         if (nameA > nameB) {
        //             return 1;
        //         }

        //         return 0;
        //         });

        //        return self.arr.sort();
        //     }
        
		
		}
		
	},
	filters: {} 
}); 