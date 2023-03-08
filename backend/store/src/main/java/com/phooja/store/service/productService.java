package com.phooja.store.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phooja.store.entity.productStore;
import com.phooja.store.repository.storeRepo;

@Service
public class productService {

			@Autowired

			private storeRepo pro;

			public void saveDetails(productStore obj) {

				pro.save(obj);

			}

			public void updateDetails(productStore obj) {

				pro.saveAndFlush(obj);

			}
			
			
			public List<productStore>  getAllDetails()
			{
				return pro.findAll();
			}

			public void deleteProductById(int id) {

			pro.deleteById(id);

			}
	

}
