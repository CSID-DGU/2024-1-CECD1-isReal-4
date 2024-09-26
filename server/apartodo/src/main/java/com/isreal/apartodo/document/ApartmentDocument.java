package com.isreal.apartodo.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "apartment")
public class ApartmentDocument {
    @Id
    private String apartmentId;

    private String apartmentName;

    private String apartmentInformation;

    private String partnersInformation;
}