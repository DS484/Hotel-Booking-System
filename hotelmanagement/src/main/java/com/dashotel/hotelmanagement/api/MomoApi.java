package com.dashotel.hotelmanagement.api;

import com.dashotel.hotelmanagement.dto.request.CreateMonoRequest;
import com.dashotel.hotelmanagement.dto.response.CreateMonoResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Component
public interface MomoApi {
    @PostMapping("/create")
    CreateMonoResponse createMomoQR(@RequestBody CreateMonoRequest createMonoRequest);
}
