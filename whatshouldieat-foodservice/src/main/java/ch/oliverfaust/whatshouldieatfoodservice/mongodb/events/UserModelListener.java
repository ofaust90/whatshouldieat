package ch.oliverfaust.whatshouldieatfoodservice.mongodb.events;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import ch.oliverfaust.whatshouldieatfoodservice.model.FoodItem;
import ch.oliverfaust.whatshouldieatfoodservice.service.SequenceGeneratorService;


@Component
public class UserModelListener extends AbstractMongoEventListener<FoodItem> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public UserModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<FoodItem> event) {
        if (event.getSource().getId() < 1) {
            event.getSource().setId(sequenceGenerator.generateSequence(FoodItem.SEQUENCE_NAME));
        }
    }
  
}
