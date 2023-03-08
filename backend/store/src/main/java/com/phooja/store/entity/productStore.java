package com.phooja.store.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
@Entity
@Transactional
@Table(name="Products")
public class productStore {

		@Id
		@Column(name="id")
		private int  id;
		
		@Column(name="pro_name")
		private String  pro_name;
		
		@Column(name="cost")
		private int  cost;
		
		
		@Column(name="stock")
		private int  stock;
		
		@Column(name="category")
		private String  category;

		@Column(name="discount")
		private int discount;

		@Column(name="quality")
		private String quality;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getPro_name() {
			return pro_name;
		}

		public void setPro_name(String pro_name) {
			this.pro_name = pro_name;
		}

		public int getCost() {
			return cost;
		}

		public void setCost(int cost) {
			this.cost = cost;
		}

		public int getStock() {
			return stock;
		}

		public void setStock(int stock) {
			this.stock = stock;
		}

		public String getCategory() {
			return category;
		}

		public void setCategory(String category) {
			this.category = category;
		}

		public int getDiscount() {
			return discount;
		}

		public void setDiscount(int discount) {
			this.discount = discount;
		}

		public String getQuality() {
			return quality;
		}

		public void setQuality(String quality) {
			this.quality = quality;
		}

		public productStore(int id, String pro_name, int cost, int stock, String category, int discount,
				String quality) {
			super();
			this.id = id;
			this.pro_name = pro_name;
			this.cost = cost;
			this.stock = stock;
			this.category = category;
			this.discount = discount;
			this.quality = quality;
		}
		
		public productStore()
		{
			
		}
			
}
