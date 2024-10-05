package com.isreal.apartodo.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "apartment")
public class ApartmentDocument {
    @Id
    private String apartmentId;

    @Field("apartment_name")
    private String apartmentName;

    @Field("apartment_information")
    private String apartmentInformation;
}