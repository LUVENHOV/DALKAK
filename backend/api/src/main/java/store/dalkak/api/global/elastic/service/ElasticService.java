package store.dalkak.api.global.elastic.service;

import java.util.List;
import store.dalkak.api.global.elastic.dto.ElasticDto;

public interface ElasticService {

    List<ElasticDto> findAllElasticLog(String type, String logType);
}
