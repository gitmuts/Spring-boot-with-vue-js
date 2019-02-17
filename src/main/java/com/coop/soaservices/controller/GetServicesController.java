package com.coop.soaservices.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.coop.soaservices.model.SoaService;
import com.coop.soaservices.service.GetSoaServicesService;

@RestController
public class GetServicesController {

	
	Logger logger = LoggerFactory.getLogger(GetServicesController.class);
	
	@Autowired
	GetSoaServicesService getServices;
	
	@RequestMapping(value = "/getServices", method = RequestMethod.GET)
	public List<SoaService> getServices(){
		List<SoaService> services = new ArrayList<>();
		
		try {
			
			services = getServices.getSoaServices();
			
		}catch(Exception e) {
			logger.error(e.getLocalizedMessage());
		}
		
		return services;
	}
}
