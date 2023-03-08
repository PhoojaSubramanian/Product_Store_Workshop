package com.phooja.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.phooja.store.entity.productStore;
import com.phooja.store.service.productService;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class productController {

				@Autowired

				private productService service;

				@PostMapping("/addProduct")

				public String postDetails(@RequestBody productStore obj)

				{

				service.saveDetails(obj);

				return "Value Added";

				}
				
				@PutMapping("/updateProduct")

				public String putDetails(@RequestBody productStore obj)

				{

				service.updateDetails(obj);

				return "Value Updated";

				}

				@GetMapping("/getProduct")

				public List<productStore> getAllDetails(){

				return service.getAllDetails();

				}
				
				
				@DeleteMapping("/deleteProduct/{id}")
				
				public String deleteById(@PathVariable("id") int id)
				{
					service.deleteProductById(id);
					return "Value deleted";
				}

}
