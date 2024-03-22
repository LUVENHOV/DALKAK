package store.dalkak.api.global.elastic.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.elastic.dto.CocktailDocument;
import store.dalkak.api.global.elastic.dto.ElasticViewReqDto;
import store.dalkak.api.global.elastic.service.ElasticService;
import store.dalkak.api.global.response.ApiResponse;

@RestController
@RequestMapping("/elastic")
@RequiredArgsConstructor
@Slf4j
public class ElasticController {

    private final ElasticService elasticService;

    @PostMapping
    public ResponseEntity<ApiResponse<String>> createPost(@RequestBody
        ElasticViewReqDto elasticViewReqDto) {
        elasticService.createElasticLog(elasticViewReqDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.of(201, "엘라스틱 생성"));
    }

    @GetMapping("/view")
    public ResponseEntity<ApiResponse<String>> searchPost() {
        List<CocktailDocument> cocktailDocumentList = elasticService.findAllElasticLog();
        for(CocktailDocument cocktailDocument : cocktailDocumentList) {
            log.info(cocktailDocument.toString());
        }
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(201, "엘라스틱 조회"));
    }
}
