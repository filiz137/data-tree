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
                <button v-on:click="deleteItems(child)">Delete</button>
			<contact-list v-for="item in child.sub" :key="item.ID" :child="item" :class="{ 'open' : child.toggle }" v-on:delete="deleteItem(item.ID)"></contact-list>
            </div>
		</div>
    `,
    methods: {
        deleteItems: function (item) {
			let self = this;

			console.log(item.parentID);
			console.log(item.ID);

			// function removeFromTree(parent, childNameToRemove){
			// 	parent = parent.filter((child) => {
			// 		return child.ID !== childNameToRemove
			// 	}).map((child) => {
			// 		return removeFromTree(child.sub, childNameToRemove)
			// 	});
			// 	return parent;
			//   }

			//   let tree = removeFromTree(self.$root.$data.result, item.ID)         
			//   console.log(tree);
			
			function finded(arr, id, param) {
				return arr.filter((el) => {
					let result = false;
					if ((el[param] != id) && el.sub.length) {
						return finded(el.sub, id, 'parentID')
					} else if (el[param] === id) {
						console.log('hello')
						return el;

					} else return false;
					//result = ((el[param] != id) && el.sub.length) ? finded(el.sub, id, 'parentID') : el;
					// if ((el[param] != id) && el.sub.length) return finded(el.sub, id, 'parentID');
					// if (el[param] === id) return el;
					// return result;
				})
			}
			//console.log(finded(self.$root.$data.result, item.ID, 'ID'))
			

			//   self.$emit('delete')
		// let index = this.$root.$data.result.indexOf(item);
		// this.$delete(this.$root.$data.result, item.id);
		// console.log(item.id)
		// console.log(this.$root.$data.result)
		//this.$root.$data.result.splice(index, 1)
        }
    },
})

let contact = new json({
	el: '#list',
	data: {},
	created() {
		let self = this;
		self.contactList();
	},
	methods: {
        deleteItem: function (id) {
			let self = this;
			console.log(id);
			// self.result.map(item => { 
			// 	 if (item.ID === id) {
			// 		 let index = self.result.indexOf(item);
			// 		 self.result.splice(index, 1)
			// 	 };
			// })
		},
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
        
		
		},
		getList: function () {
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
            
			return list(self.arr, parent);
		}
		
	},
	filters: {} 
}); 