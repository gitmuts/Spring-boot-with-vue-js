package com.coop.soaservices.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.coop.soaservices.model.SoaService;
import com.github.javafaker.Faker;

@Service
public class GetSoaServicesService {

	Logger logger = LoggerFactory.getLogger(GetSoaServicesService.class);

	public List<SoaService> getSoaServices() {
		List<SoaService> services = new ArrayList<>();
		try {
			// here you can get data from db/ or http endpoint
			Faker faker = new Faker();
			for (int i = 0; i <= 50; i++) {
				SoaService service = new SoaService();
				service.setName(faker.app().name());
				service.setId(faker.number().randomNumber());
				service.setCreatedBy(faker.name().name());
				service.setCreatedAt(faker.date().birthday());
				services.add(service);
			}

		} catch (Exception e) {
			logger.error("Error while getting services " + e.getMessage());
		}
		return services;
	}

	public SoaService getSoaServiceById(long id) {
		try {
			Faker faker = new Faker();

			SoaService service = new SoaService();
			service.setName(faker.app().name());
			service.setId(faker.number().randomNumber());
			service.setCreatedBy(faker.name().name());
			service.setCreatedAt(faker.date().birthday());

			return service;
		} catch (Exception e) {
			logger.error(e.getMessage());
			return null;
		}
	}
}
